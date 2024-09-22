# Semester Project 2nd year


![CrownBid](https://i.postimg.cc/cLRYdGPZ/auctionhaouse.png)


## 🎯 **Project Goal**
The objective of this project is to apply the front-end development skills acquired over the past three semesters by building an auction website. The website will allow users to bid on items, as well as create and manage their own listings.

## 📝 **Project Brief**
The goal is to create a front-end auction site where:
- Users can register with their **stud.noroff.no** email.
- Registered users receive **1000 credits** upon signup, which can be used for bidding on listings or earned by selling items.
- Unregistered users can browse listings but cannot place bids or create listings.

The back-end API functionality is already managed by an existing application, so this project focuses solely on building the **front-end** to interact with the API.

## 🖥️ **Live Demo**
[Link to live demo](https://sp2-jahb.netlify.app/)

---

## 🔧 **Features**
### User Authentication
- **Register**: Users with a valid **stud.noroff.no** email can sign up.
- **Login/Logout**: Users can log in and out of the system.
- **Avatar Update**: Registered users can update their profile pictures.
  
### Listing & Bidding
- **Create Listing**: Registered users can create new auction listings with:
  - Title
  - Deadline date
  - Media gallery
  - Description
- **Bidding**: Registered users can place bids on other users' listings.
  
### Search & View
- **View Listings**: Unregistered users can search through the listings.
- **View Bids**: Registered users can view all bids placed on a listing.
  
### User Credits
- Each registered user starts with **1000 credits**.
- Credits can be earned by selling items or used to purchase items via bidding.

---

## 🚀 **Technologies Used**
- **HTML5**, **SCSS**, and **JavaScript** for the front-end development.
- **Bootstrap** for responsive design and UI components.
- **Vite** as the build tool and development server for fast module-based development.
- **Figma** for design and prototyping
- **API**: The site interacts with the [Noroff Auction API](https://docs.noroff.dev/docs/v2) to manage listing data and bids.
- **Jest** for unit testing.

---

## 🛠️ **Setup Instructions**

1. Clone the repo:

```bash
git clone https://github.com/jonhavbra87/SP2
```

2. Install the dependencies:

```
npm install
```

### Running

Run the app:

```
npm run dev
```

Check Format:

```
npm run format
```

Check Lint:

```
npm run lint
```




## 🧪 **Testing**

### Testing with Actions on GitHub

[![Unit Test](https://github.com/jonhavbra87/SP2/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/jonhavbra87/SP2/actions/workflows/main.yml)

### Command line testing

Run UNIT-tests:

```
npm run test:unit
```

## Contributing

This is a Noroff semester project. I appreciate a peer review if you got the time!

## Contact

<p align="center">
  <a href="https://no.linkedin.com/in/jon-are-haver%C3%A5en-bratt%C3%A5s-5a3805262?trk=people-guest_people_search-card">
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/LinkedIn.svg" width="50" > 
  </a>
  <a href="https://www.discord.com">
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Discord.svg" width="50" > 
  </a>
  <a href="https://www.instagram.com/jonareb87?igsh=MTAwdDEzZHFwMWFjbQ%3D%3D&utm_source=qr">
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Instagram.svg" width="50" > 
  </a>
  <a href="mailto:mail@kongsvinger-it.no">
    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Gmail-Dark.svg" width="50" > 
  </a>
</p>
