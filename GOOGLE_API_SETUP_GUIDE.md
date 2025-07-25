# Google API Setup Guide for Scalify AI Website

## Overview
Your website needs Google Service Account credentials to access Google Sheets and Google Calendar APIs. Follow these steps to set up the integrations.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note your project ID

## Step 2: Enable Required APIs

1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for and enable these APIs:
   - **Google Sheets API**
   - **Google Calendar API**

## Step 3: Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the details:
   - Service account name: `scalify-ai-service`
   - Service account ID: `scalify-ai-service`
   - Description: `Service account for Scalify AI website integrations`
4. Click "Create and Continue"
5. Skip role assignment for now (click "Continue")
6. Click "Done"

## Step 4: Generate Service Account Key

1. In the Credentials page, find your service account
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Choose "JSON" format
6. Download the JSON file
7. **Keep this file secure - it contains your private key!**

## Step 5: Set Up Google Sheets

1. Create a new Google Sheet or use an existing one
2. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)
   - Example: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`
   - Sheet ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`
3. Share the sheet with your service account email (found in the JSON file)
   - Give "Editor" permissions
4. Set up the header row in Sheet1:
   - A1: Timestamp
   - B1: Name
   - C1: Email
   - D1: Company
   - E1: Phone
   - F1: Message
   - G1: Meeting Type
   - H1: Meeting Time

## Step 6: Set Up Google Calendar

1. Open [Google Calendar](https://calendar.google.com/)
2. Create a new calendar or use your primary calendar
3. If using a new calendar:
   - Click the "+" next to "Other calendars"
   - Choose "Create new calendar"
   - Name it "Scalify AI Meetings"
   - Set timezone to your preferred timezone
4. Share the calendar with your service account email:
   - Go to calendar settings
   - Under "Share with specific people", add your service account email
   - Give "Make changes to events" permission
5. Copy the Calendar ID:
   - In calendar settings, scroll down to "Calendar ID"
   - Copy the ID (looks like: `your-email@gmail.com` or `random-string@group.calendar.google.com`)

## Step 7: Update Environment Variables

1. Open the JSON key file you downloaded
2. Extract these values:
   - `client_email` → GOOGLE_CLIENT_EMAIL
   - `private_key` → GOOGLE_PRIVATE_KEY (keep the quotes and newlines)
3. Update `/home/ubuntu/intellaigible_website/app/.env`:

```env
GOOGLE_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_ACTUAL_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
GOOGLE_CALENDAR_ID=your-calendar-id@gmail.com
GOOGLE_SHEETS_ID=your-google-sheets-id
```

## Step 8: Test the Integration

After updating the environment variables, run the test script:

```bash
cd /home/ubuntu/intellaigible_website/app
node test-google-apis.js
```

## Security Notes

- Never commit the `.env` file to version control
- Keep your service account JSON file secure
- Regularly rotate your service account keys
- Use least-privilege permissions

## Troubleshooting

### Common Issues:

1. **"Google API credentials not configured"**
   - Check that GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY are set in .env

2. **"Permission denied" errors**
   - Ensure the service account has access to your Sheet/Calendar
   - Check that the APIs are enabled in Google Cloud Console

3. **"Invalid credentials" errors**
   - Verify the private key format (should include newlines as `\n`)
   - Ensure the service account email is correct

4. **"Spreadsheet not found"**
   - Check the GOOGLE_SHEETS_ID is correct
   - Ensure the sheet is shared with the service account

5. **"Calendar not found"**
   - Verify the GOOGLE_CALENDAR_ID is correct
   - Use "primary" for your main calendar
   - Ensure calendar is shared with the service account

## Next Steps

Once the APIs are working:
1. Test the contact form on your website
2. Test the meeting scheduler
3. Verify data appears in your Google Sheet
4. Verify calendar events are created
5. Set up production environment variables for deployment
