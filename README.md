# Lebogang Mareletse — Clinical Psychology Website

A responsive React + Vite website with an appointment enquiry form.

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open Terminal and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite (usually http://localhost:5173).

## Booking form behaviour
The form validates required fields in the browser, then opens WhatsApp with a pre-filled enquiry addressed to the phone number supplied in the provided screenshot. The visitor must press Send in WhatsApp. This is an enquiry only, not an instant booking or confirmed appointment.

## Before publishing
- Obtain the practitioner’s permission to publish their name, contact details and professional description.
- Confirm professional registration/title, exact services, fees, hours, physical address and preferred contact channel.
- Confirm the WhatsApp number is correct and is a practice-controlled number.
- Add an appropriate privacy notice and secure server-side booking system if enquiries should be stored or handled without WhatsApp.
- This demo does not store submissions or provide emergency/clinical support.
