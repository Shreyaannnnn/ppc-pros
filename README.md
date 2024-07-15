
PPC Pros api Needed (Screen based)
----------------------------------

### Onboarding

#### Screen: Blogs

*   **API:** `/getBlogs` (GET all blog posts)
    *   **Request Example:**
         
        
    *   **Response Example (GET):**
        {
            {
              "title": "XYZ",
              "content": ".....",
              "time_posted": "12442453",
              "author": "Steve"
            },
            {
              "title": "ABC",
              "content": ".....",
              "time_posted": "12442453",
              "author": "Steve"
            }
        }  

#### Screen: Content Page

*   **API:** `/getVideoContent` (GET all video content)
    *   **Request Example:**
        
         
            
        
    *   **Response Example (GET):**

        {
            {
              "title": "XYZ",
              "videoLink": ".....",
              "description": "Video Description",
              "thumbnail": ".....",
              "time_posted": "......",
            },
            {
              "title": "ABC",
              "videoLink": ".....",
              "description": "Video Description",
              "thumbnail": ".....",
              "time_posted": "......",
            }
        } 

#### Screen: Admin Add Blog

*   **API:** `/addBlog` (POST request, attributes: title, content)
    *   **Request Example:**
        
            {
              "title": "ABC",
              "content": "....."
            }
            
        
    *   **Response Example (GET):**
        *   Response attributes: `{ "status": "success" }`


#### Admin Add Content Screen

*   **API:** `/addContent`
    *   **Description:** Add a new content
    *   **Response Attributes:**
        *   `title`
        *   `video`
        *   `description`
        *   `timePosted`
    *   **Example Response:**
        
            {
              "status": "Content Added"
            }
            
        
    

* * *

### ADMIN

**Screen:** Admin Blogs Edit Page

**API:** `/get-blogs` (GET)

*   **Attributes:** `title`, `content`, `timePosted`
*   **Example Request JSON:**

    {}
    

*   **Example Response JSON:**

    {
            {
              "title": "XYZ",
              "content": ".....",
              "time_posted": "12442453",
              "author": "Steve"
            },
            {
              "title": "ABC",
              "content": ".....",
              "time_posted": "12442453",
              "author": "Steve"
            }
        }  
   
Let’s discuss and plan these aspects to optimize user experience and business profitability.