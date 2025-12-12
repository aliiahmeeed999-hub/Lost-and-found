# 🧪 Complete Testing Guide - Messages & Reputation System

**Last Updated**: December 3, 2025  
**Status**: All endpoints ready to test

---

## ✅ Pre-Testing Checklist

Before you start, verify:

- [ ] Database migration completed: `npx prisma migrate dev --name add_reputation_system`
- [ ] Prisma client generated: `npx prisma generate`
- [ ] Dev server running: `npm run dev`
- [ ] You're logged in to the app (check /dashboard loads)
- [ ] Browser DevTools open (F12) to check for errors
- [ ] You have at least 2 test users in the database

---

## 🚀 Quick Start - 5 Minute Test

### Step 1: Start Your Dev Server
```bash
npm run dev
```

Expected: Server runs on http://localhost:3000

### Step 2: Go to Dashboard
```
http://localhost:3000/dashboard
```

Expected: Dashboard loads with stats cards showing:
- Lost Items count
- Found Items count
- Messages count
- Reputation score

### Step 3: Click "View Messages"
Click the purple "View Messages" card on the dashboard.

Expected: 
- Messages page loads at `/dashboard/messages`
- Shows "Conversations" list on left (may be empty)
- Shows message area on right
- "No conversations yet" message if no messages

### Step 4: Click "Check Reputation"
Click the indigo "Check Reputation" card.

Expected:
- Reputation page loads at `/dashboard/reputation`
- Shows your level (🥉 Bronze, 🥈 Silver, 🥇 Gold, or 💎 Platinum)
- Shows total points and progress bar
- Shows "How to Earn Points" section
- Three tabs: Overview, Activity Log, Leaderboard

---

## 📡 API Testing with cURL

### Test 1: Get Conversations (GET /api/messages)

```bash
# Prerequisites: You must be logged in
# Copy your auth token from DevTools → Application → Cookies → "token"

curl -X GET "http://localhost:3000/api/messages?limit=20&offset=0" \
  -H "Cookie: token=YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json"
```

**Expected Response** (success):
```json
{
  "success": true,
  "conversations": [
    {
      "partnerId": 2,
      "partnerName": "Jane Smith",
      "partnerImage": null,
      "lastMessage": "Hi there!",
      "lastMessageTime": "2025-12-03T10:30:00Z",
      "unreadCount": 1
    }
  ],
  "totalCount": 1,
  "hasMore": false
}
```

**Expected Response** (no conversations):
```json
{
  "success": true,
  "conversations": [],
  "totalCount": 0,
  "hasMore": false
}
```

**Troubleshooting**:
- 401 Unauthorized: Token missing or invalid - copy correct token
- Empty array: No messages yet - send a test message first
- Error in DevTools: Check browser console for details

---

### Test 2: Send Message (POST /api/messages/send)

**Prerequisites**: Two user accounts (user ID 1 and user ID 2)

```bash
# Send message from User 1 to User 2
curl -X POST "http://localhost:3000/api/messages/send" \
  -H "Cookie: token=USER1_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "receiverId": 2,
    "message": "Hello! Have you seen my blue bicycle?"
  }'
```

**Expected Response** (success):
```json
{
  "success": true,
  "message": {
    "id": 1,
    "senderId": 1,
    "receiverId": 2,
    "message": "Hello! Have you seen my blue bicycle?",
    "subject": null,
    "isRead": false,
    "createdAt": "2025-12-03T10:35:00Z"
  }
}
```

**Expected Response** (invalid user):
```json
{
  "success": false,
  "error": "User not found"
}
```

**Troubleshooting**:
- 401: Not logged in - use valid token
- "User not found": receiverId doesn't exist - use valid user ID
- Empty response: Server error - check console logs

---

### Test 3: Get Conversation (GET /api/messages/[userId])

```bash
# Get conversation with user 2
curl -X GET "http://localhost:3000/api/messages/2?limit=20&offset=0" \
  -H "Cookie: token=YOUR_TOKEN" \
  -H "Content-Type: application/json"
```

**Expected Response**:
```json
{
  "success": true,
  "messages": [
    {
      "id": 1,
      "senderId": 1,
      "receiverId": 2,
      "message": "Hello! Have you seen my blue bicycle?",
      "subject": null,
      "isRead": false,
      "createdAt": "2025-12-03T10:35:00Z"
    }
  ],
  "otherUser": {
    "id": 2,
    "name": "Jane Smith",
    "profileImage": null
  },
  "totalCount": 1,
  "hasMore": false
}
```

**Troubleshooting**:
- 401: Token invalid or missing
- Empty messages: No conversation history - send message first
- "User not found": Invalid userId in URL

---

### Test 4: Get User Reputation (GET /api/reputation/[userId])

**Note**: This endpoint does NOT require authentication (public)

```bash
# Get reputation for user 1 (public - no token needed)
curl -X GET "http://localhost:3000/api/reputation/1" \
  -H "Content-Type: application/json"
```

**Expected Response**:
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "reputation": 45,
    "totalPoints": 45,
    "level": "bronze",
    "profileImage": null,
    "createdAt": "2025-10-01T00:00:00Z"
  }
}
```

**Expected Response** (user not found):
```json
{
  "success": false,
  "error": "User not found"
}
```

**Troubleshooting**:
- 404 Not Found: User ID doesn't exist - use valid ID
- No reputation shown: User data exists but no reputation - check database

---

### Test 5: Get Reputation Logs (GET /api/reputation/[userId]/logs)

```bash
# Get reputation activity for user 1
curl -X GET "http://localhost:3000/api/reputation/1/logs?limit=10&offset=0" \
  -H "Content-Type: application/json"
```

**Expected Response**:
```json
{
  "success": true,
  "logs": [
    {
      "id": "uuid-123",
      "userId": 1,
      "action": "message_sent",
      "points": 5,
      "reason": "Message sent to user",
      "metadata": null,
      "createdAt": "2025-12-03T10:35:00Z"
    }
  ],
  "totalCount": 1,
  "hasMore": false
}
```

**Expected Response** (no activity):
```json
{
  "success": true,
  "logs": [],
  "totalCount": 0,
  "hasMore": false
}
```

---

### Test 6: Get Leaderboard (GET /api/reputation/leaderboard)

```bash
# Get top 10 users by reputation
curl -X GET "http://localhost:3000/api/reputation/leaderboard?limit=10&offset=0" \
  -H "Content-Type: application/json"
```

**Expected Response**:
```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "totalPoints": 150,
      "level": "gold",
      "profileImage": null,
      "rank": 1
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "totalPoints": 100,
      "level": "silver",
      "profileImage": null,
      "rank": 2
    }
  ],
  "totalCount": 2,
  "hasMore": false
}
```

---

## 🧪 Browser Testing - Step by Step

### Test Scenario: Complete Message Flow

**Precondition**: Have 2 logged-in users ready

**Test Case 1: Send Message Through UI**
1. Login as User 1
2. Go to `/dashboard/messages`
3. Should see empty state "No conversations yet"
4. Open another browser tab/window
5. Login as User 2
6. In User 2 tab, go to `/dashboard/messages`
7. Back in User 1 tab, click on any other user (or visit `/messages/[userId]` directly)
8. Type message: "Hello User 2!"
9. Click "Send" button
10. Message should appear on left in conversation thread

**Expected**:
- ✅ Message appears instantly
- ✅ Message shows on left (sent by you) with indigo background
- ✅ Sender's name appears in thread
- ✅ Timestamp shows creation time

**Troubleshooting**:
- Message doesn't send: Check browser console for fetch errors
- Page shows 401: Login token expired - refresh page or log in again
- Empty conversation list: No messages yet - send one first

---

### Test Scenario: Reputation Points

**Test Case 1: View Current Reputation**
1. Login as any user
2. Go to `/dashboard`
3. Check "Reputation" stat card shows a number
4. Click "Check Reputation" card
5. Should load `/dashboard/reputation`

**Expected**:
- ✅ Reputation number displays (may be 0 at start)
- ✅ Level shows (🥉 Bronze if < 50 points)
- ✅ Progress bar visible
- ✅ "How to Earn Points" section shows actions

**Troubleshooting**:
- 0 reputation: Normal if no actions taken yet
- Page blank: Check browser console for errors
- Level not showing: User may have no reputation data yet

---

### Test Scenario: Leaderboard

**Test Case 1: View Leaderboard**
1. Go to `/dashboard/reputation`
2. Click "Leaderboard" tab
3. Should see list of top users

**Expected**:
- ✅ List of users with their points
- ✅ Rank numbers (1, 2, 3...)
- ✅ Level badges (🥉🥈🥇💎)
- ✅ Empty state if no users: Shows "No leaderboard data"

**Troubleshooting**:
- Empty leaderboard: Normal if only 1 user exists
- Users don't show: Database may not have reputation data

---

## 🔍 Checking Browser Console

Open DevTools (F12) and go to **Console** tab to check for errors:

### Expected Messages (Good)
```
Loading messages...
Loading reputation...
```

### Error Messages (Bad - Needs Fixing)
```
Failed to get current user: Error: ...
Failed to load conversations: TypeError: ...
Unauthorized 401
```

**How to Fix**:
1. If you see 401 errors: You're not authenticated - login first
2. If you see fetch errors: Check API route is working (use curl test)
3. If you see blank pages: Database may be missing data

---

## 📋 Full Testing Checklist

### Phase 1: Database & Setup
- [ ] Run migration: `npx prisma migrate dev --name add_reputation_system`
- [ ] Generate client: `npx prisma generate`
- [ ] Create at least 2 test user accounts
- [ ] Dev server starts without errors

### Phase 2: Navigation
- [ ] Dashboard loads (see stats cards)
- [ ] "View Messages" button navigates to `/dashboard/messages`
- [ ] "Check Reputation" button navigates to `/dashboard/reputation`
- [ ] Back links work on both pages

### Phase 3: Messages Page
- [ ] Messages page loads without errors
- [ ] Conversations list shows (empty if no messages)
- [ ] Can select a conversation
- [ ] Message thread displays correctly
- [ ] Can type and send message
- [ ] Sent message appears in thread

### Phase 4: Reputation Page
- [ ] Reputation page loads
- [ ] Shows current user's level and points
- [ ] Shows progress bar to next level
- [ ] "How to Earn Points" section displays
- [ ] All three tabs work: Overview, Activity Log, Leaderboard
- [ ] Leaderboard shows list of users

### Phase 5: API Endpoints
- [ ] GET /api/messages - Returns conversations
- [ ] POST /api/messages/send - Creates message
- [ ] GET /api/messages/[userId] - Returns messages
- [ ] GET /api/reputation/[userId] - Returns reputation
- [ ] GET /api/reputation/[userId]/logs - Returns logs
- [ ] GET /api/reputation/leaderboard - Returns ranked users

### Phase 6: Error Handling
- [ ] Invalid token shows 401
- [ ] Invalid user ID shows 404
- [ ] Missing fields show error
- [ ] Empty lists show "no data" message
- [ ] Network errors don't crash page

### Phase 7: Data Persistence
- [ ] Send message, refresh page, message still there
- [ ] Add reputation, refresh page, points still there
- [ ] Conversation stays in list after sending message
- [ ] Unread count updates correctly

---

## 🐛 Debugging Commands

### Check Database for Messages
```bash
# In your psql or database client:
SELECT * FROM messages LIMIT 5;
```

### Check Database for Reputation
```bash
SELECT * FROM reputation_logs LIMIT 5;
SELECT id, name, reputation, total_points, level FROM users;
```

### Check API Response in Node
```bash
# From your terminal in the project:
curl -X GET "http://localhost:3000/api/reputation/1"
```

### Check Errors in Terminal
Watch your `npm run dev` terminal output for:
- Prisma query errors
- API route errors
- Authentication errors

---

## ✅ Success Criteria

Your implementation is working correctly when:

1. ✅ Dashboard loads with all stats
2. ✅ Can navigate to `/dashboard/messages`
3. ✅ Can navigate to `/dashboard/reputation`
4. ✅ Messages API returns data (GET /api/messages)
5. ✅ Can send a message (POST /api/messages/send)
6. ✅ Can view a conversation (GET /api/messages/[userId])
7. ✅ Can check reputation (GET /api/reputation/[userId])
8. ✅ Leaderboard shows users (GET /api/reputation/leaderboard)
9. ✅ No console errors in DevTools
10. ✅ Pages load without blank screens

---

## 🆘 Common Issues & Solutions

### Issue: "Blank Page on /dashboard/messages"

**Diagnosis**:
1. Open DevTools (F12) → Console
2. Look for error messages
3. Check Network tab for failed requests

**Solutions**:
- If 401 error: Not logged in - refresh and login
- If API returns 500: Server error - check `npm run dev` terminal
- If no error: Database may be empty - send a test message via API

---

### Issue: "No Conversations Appear"

**Diagnosis**:
- Have you sent any messages?
- Are there at least 2 users in database?

**Solutions**:
1. Send test message via curl API first:
   ```bash
   curl -X POST "http://localhost:3000/api/messages/send" \
     -H "Cookie: token=USER_TOKEN" \
     -d '{"receiverId": 2, "message": "test"}'
   ```
2. Then refresh `/dashboard/messages` page
3. Conversation should appear in list

---

### Issue: "Reputation Shows 0 or Not Updating"

**Diagnosis**:
- Haven't earned reputation yet
- Reputation awards not integrated into other endpoints

**Solutions**:
1. Reputation starts at 0 - normal
2. Check `/dashboard/reputation` to see actual value
3. Manually award points via API:
   ```bash
   curl -X POST "http://localhost:3000/api/auth/me" \
     -H "Content-Type: application/json"
   ```
4. Or update database directly:
   ```sql
   UPDATE users SET reputation = 50, total_points = 50 WHERE id = 1;
   INSERT INTO reputation_logs (user_id, action, points, reason) 
   VALUES (1, 'test', 50, 'Test reputation');
   ```

---

### Issue: "Leaderboard Shows No Users"

**Diagnosis**:
- No users have reputation > 0
- Database table is empty

**Solutions**:
1. Normal if first time - users need to earn reputation first
2. Check database:
   ```sql
   SELECT * FROM users WHERE reputation > 0;
   ```
3. If empty, manually add test data:
   ```sql
   UPDATE users SET reputation = 100, total_points = 100 WHERE id = 1;
   UPDATE users SET reputation = 75, total_points = 75 WHERE id = 2;
   ```

---

## 📞 Final Verification

Run this final test to confirm everything works:

```bash
# 1. Check dev server is running
curl http://localhost:3000

# 2. Check you can access dashboard
curl -X GET "http://localhost:3000/dashboard" \
  -H "Cookie: token=YOUR_TOKEN"

# 3. Check API is responding
curl http://localhost:3000/api/reputation/1

# 4. Check database has users
psql your_database -c "SELECT COUNT(*) as user_count FROM users;"
```

All should return success responses.

---

**Testing Complete!** 🎉

If all tests pass, your messaging and reputation system is working correctly. If any test fails, check the "Troubleshooting" section above or check your browser console for detailed errors.
