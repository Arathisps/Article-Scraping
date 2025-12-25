# Beyondchats assignment

This project of  BeyondChats take-home assignment.  
Could'nt complete full as time constraints.

The main focus was on building a clear flow and structure rather than finishing every edge case.


- **Laravel backend**
  - Article model, migration and CRUD APIs
  - Articles are stored in database
  - API structure is kept simple and clean

- **NodeJS worker**
  - Fetches latest article from Laravel API
  - Uses LLM to rewrite / improve the article
  - Saves the updated article back using API
  - Google search and scraping is mocked due to time limit

- **React frontend**
  - Fetches articles from backend
  - Shows original and AI generated articles
  - Basic UI, no heavy styling


## Architecture (high level)

React App  
→ Laravel API  
→ Database  

Node Worker  
→ Laravel API  
→ Database  

---

##  Run (local)

- Backend: `php artisan serve`
- Worker: `node worker.js`
- Frontend: `npm start`

Details are kept minimal for clarity.

---

## Notes

This project shows how I approach a problem with limited time:
- build core first
- keep things extensible
- avoid over engineering

More features can be added easily on top of this structure.


