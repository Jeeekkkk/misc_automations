# Gmail Auto Archive Script

This Google Apps Script automatically archives emails after 24 hours or 7 days, depending on the label assigned. It's useful for time-sensitive emails like calendar invites or daily notifications that become irrelevant shortly after receipt.

## What It Does

The script checks for emails labeled:
- **`24hr Archive`** — moves to archive after 1 day
- **`1w Archive`** — moves to archive after 7 days

Each labeled thread is checked for age based on the last message date. If older than the defined delay, it’s marked read, unimportant, and moved to the archive.

> *This script archives, and does not delete emails (by moving to trash). Please see the gmail_auto_delete folder if you want to delete instead of archive.*

---

## Setup Instructions

### 1. Create Gmail Labels

In Gmail, create the following labels:
- `24hr Archive`
- `1w Archive`

Label names **must match exactly**.


### 2. Add Gmail Filters

For any emails you want to auto-archive:
- Open a target email
- Click the 3-dot menu near the date > **Filter messages like this**
- Click **Create filter**
- Choose **Apply label** → select either `24hr Archive` or `1w Archive`
- Click **Create filter** again

Repeat for any others.


### 3. Create the Script

1. Visit [Google Apps Script](https://script.google.com/home/start)  
2. Click **New Project**  
3. Name your project (e.g. `Time-Based Email Archive`)  
4. Paste in the code from `autoarchive.gs`  
5. Enable Gmail API:  
   - Click `+ Services` > find **Gmail API** > click **Add**  
6. Rename the file (optional)  
7. Save the project


### 4. Create Time-Based Triggers

1. In the left toolbar, go to **Triggers** (clock icon)  
2. Click **Add Trigger** (bottom right)  
3. Set up a trigger **for each function**:
   - Choose `dayArchive` or `weekArchive`
   - Event Source: `Time-driven`
   - Type: e.g. `Day timer`
   - Choose desired time

Repeat for the second function.


### 5. Test the Script

1. Make sure target emails are labeled correctly  
2. In the script editor, select `dayArchive` from the function dropdown  
3. Click **Run**  
4. Check logs for `Execution completed`  
5. Verify that old labeled emails were moved to the archive  
6. Repeat for `weekArchive`


## References

- [PixelBakery: Auto-archive Gmail](https://pixelbakery.com/recipes/gmail-automatically-delete-or-archive-emails)
- [Google Apps Script Dashboard](https://script.google.com/home/start)
