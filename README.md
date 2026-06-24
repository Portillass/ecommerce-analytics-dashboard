# E-Commerce Analytics Dashboard

## Design Assignment Submission

**Applicant:** Jarell E. Portillas

This project was created as part of the **Junior Fullstack Engineer Design Assignment** for **Gyud Technologies**.

## Project Overview

The goal of this project is to create a unified analytics dashboard that allows merchants selling on both **Shopify** and **TikTok Shop** to monitor their daily business performance and inventory health from a single **Command Center**.

The dashboard was designed with the following assumptions:

* Shopify inventory data is available in real-time.
* TikTok Shop inventory data may experience synchronization delays.
* The system must continue functioning even if one platform becomes temporarily unavailable.

## Deliverables

### 1. UI Concept

Implemented as a structural dashboard using:

* HTML5
* CSS3
* JavaScript
* Chart.js

View Dashboard:https://ecommerce-analytics-dashboard-alpha.vercel.app/

## 📸 Preview

![Dashboard Preview](./pic/1.png)

![Dashboard Preview](./pic/2.png)

![Dashboard Preview](./pic/3.png)

---

### 2. Component Architecture

The component architecture diagram is available in Figma.

🔗 **Figma Link:**
https://www.figma.com/design/m8Qx1K6ExzsrmlTIhIRyR4/Component-Architecture?node-id=7-1925&t=F6cvNK4bePZGSctE-1

---

### 3. API Contract & Error Handling

📄 See: `docs/API Contract & Error Handling.pdf`

This document includes:

* API endpoint design
* Example JSON request
* Example JSON response
* TikTok API failure handling scenario
* Error handling strategy

---

### 4. Engineering & UX Decisions

📄 See: `docs/Engineering & UX Decisions.pdf`

This document includes:

* Feature trade-offs
* UX decisions
* Edge case handling
* TikTok delay and unavailable state communication

---

## Repository Structure

```text
ecommerce-dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── chart.js
│   └── dashboard.js
│
├── docs/
│   ├── API Contract & Error Handling.pdf
│   └── Engineering & UX Decisions.pdf
│
├── pic/
│   └── 1.png
│   └── 2.png
│   └── 3.png
│
└── README.md
```

## Author

**Jarell E. Portillas**
