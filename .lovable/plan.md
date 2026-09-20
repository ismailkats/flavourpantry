# Custom domain setup — deferred

## Goal
Point `www.flavourpantry.co.za` (and optionally the root `flavourpantry.co.za`) to the Lovable site.

## Why deferred
The workspace is on the free Lovable plan. Custom domains require a paid plan, which unlocks the connect card that issues the unique `lovable_verify=...` TXT record.

## What the user can do now
Add these DNS records at Truehost for `flavourpantry.co.za`:

- **A record**
  - Type: A
  - Name: www
  - Value: 185.158.133.1

- **A record (optional root redirect)**
  - Type: A
  - Name: @
  - Value: 185.158.133.1

## What to do next
1. Upgrade the workspace in **Project Settings → Plans & credits**.
2. Go to **Project Settings → Domains → Connect Domain** and enter `www.flavourpantry.co.za`.
3. Copy the exact TXT record value shown in the connect card.
4. Add the TXT record at Truehost:
   - Type: TXT
   - Name: _lovable
   - Value: `lovable_verify=...` (exact value from Lovable)
5. Wait for DNS propagation (up to 72 hours).

## Notes
- A records can be added immediately.
- The TXT verification code is unique per connection attempt and only available after upgrading.