# 🚀 Scalify AI Google API Integration Setup

## Current Status
✅ Google Calendar MCP integration is working  
❌ Website service account credentials need to be configured  
❌ Google Sheets integration needs setup  

## Quick Setup Steps

### Step 1: Get Your Service Account Credentials

You need to create a Google Service Account to allow your website to access Google APIs. Here's how:

1. **Go to Google Cloud Console**: https://console.cloud.google.com/
2. **Create or select a project**
3. **Enable APIs**:
   - Go to "APIs & Services" > "Library"
   - Enable "Google Sheets API"
   - Enable "Google Calendar API"
4. **Create Service Account**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Name: `scalify-ai-service`
   - Click "Create and Continue" > "Done"
5. **Generate Key**:
   - Click on your service account email
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key" > "JSON"
   - Download the JSON file

### Step 2: Extract Credentials from JSON

Open the downloaded JSON file and copy these values:
- `client_email` → This is your GOOGLE_CLIENT_EMAIL
- `private_key` → This is your GOOGLE_PRIVATE_KEY (keep the exact format with \n)

### Step 3: Create Google Sheet

1. Create a new Google Sheet: https://sheets.google.com/
2. Add these headers in row 1:
   - A1: Timestamp
   - B1: Name  
   - C1: Email
   - D1: Company
   - E1: Phone
   - F1: Message
   - G1: Meeting Type
   - H1: Meeting Time
3. Share the sheet with your service account email (from step 2)
4. Give "Editor" permissions
5. Copy the Sheet ID from the URL (the long string between /d/ and /edit)

### Step 4: Set Up Calendar

1. Go to Google Calendar: https://calendar.google.com/
2. Either use your primary calendar or create a new one
3. Share it with your service account email
4. Give "Make changes to events" permission
5. Copy the Calendar ID:
   - For primary calendar: use "primary"
   - For custom calendar: go to calendar settings and copy the Calendar ID

### Step 5: Update Environment Variables

Replace the placeholder values in `/home/ubuntu/intellaigible_website/app/.env`:

```env
GOOGLE_CLIENT_EMAIL=your-actual-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-actual-private-key-here\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID=primary
GOOGLE_SHEETS_ID=your-actual-sheet-id
```

**Important**: The private key must keep the exact format with `\n` for newlines!

### Step 6: Test the Integration

After updating the credentials, run:
```bash
cd /home/ubuntu/intellaigible_website/app
node test-google-apis.js
```

### Step 7: Start the Website

```bash
cd /home/ubuntu/intellaigible_website/app
npm run dev
```

## Need Help?

If you get stuck on any step, I can help you:
1. Create the service account
2. Set up the Google Sheet
3. Configure the calendar
4. Debug any authentication issues

Just let me know which step you need assistance with!
