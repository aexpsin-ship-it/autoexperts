# Blog API Documentation

## Overview
Complete Blog management system with full CRUD operations, comments, and filtering capabilities.

## Models

### Blog Model
```javascript
{
  title: String (required),
  slug: String (unique),
  description: String (required),
  content: String (required),
  author: ObjectId (User reference),
  authorName: String,
  category: String (enum),
  image: String,
  tags: [String],
  published: Boolean,
  featured: Boolean,
  views: Number,
  likes: Number,
  comments: [{
    user: ObjectId,
    userName: String,
    text: String,
    createdAt: Date
  }],
  readTime: Number,
  timestamps: true
}
```

### Categories
- Car Hire
- Travel Tips
- News
- Events
- Maintenance
- Guides
- Other

---

## API Endpoints

### 1. Get All Blogs
**GET** `/api/blog`

**Query Parameters:**
- `page` (optional) - Page number (default: 1)
- `limit` (optional) - Items per page (default: 10)
- `category` (optional) - Filter by category
- `featured` (optional) - Get featured blogs only (true/false)
- `published` (optional) - Get published blogs (default: true)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "title": "...",
      "slug": "...",
      "description": "...",
      "content": "...",
      "author": { "_id": "...", "name": "...", "email": "..." },
      "category": "...",
      "views": 100,
      "likes": 5,
      "readTime": 5,
      "published": true,
      "featured": false,
      "createdAt": "2026-05-22T...",
      "updatedAt": "2026-05-22T..."
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "pages": 3
  }
}
```

---

### 2. Create Blog
**POST** `/api/blog`

**Request Body:**
```json
{
  "title": "Blog Title",
  "description": "Short description",
  "content": "Full blog content...",
  "category": "Car Hire",
  "tags": ["tag1", "tag2"],
  "image": "image-url",
  "authorId": "user-id",
  "authorName": "John Doe",
  "published": false
}
```

**Response:**
```json
{
  "success": true,
  "message": "Blog created successfully",
  "data": { ... blog object ... }
}
```

**Status Codes:**
- `201` - Created successfully
- `400` - Validation error
- `404` - Author not found

---

### 3. Get Single Blog
**GET** `/api/blog/:id`

**URL Parameters:**
- `id` - Blog ID or slug

**Response:**
```json
{
  "success": true,
  "data": { ... blog object with updated views ... }
}
```

**Status Codes:**
- `200` - Success
- `404` - Blog not found
- `500` - Server error

---

### 4. Update Blog
**PUT** `/api/blog/:id`

**URL Parameters:**
- `id` - Blog ID or slug

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "content": "Updated content",
  "category": "Travel Tips",
  "tags": ["new-tag"],
  "image": "new-image-url",
  "featured": true,
  "published": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Blog updated successfully",
  "data": { ... updated blog object ... }
}
```

**Status Codes:**
- `200` - Updated successfully
- `400` - Validation error
- `404` - Blog not found

---

### 5. Delete Blog
**DELETE** `/api/blog/:id`

**URL Parameters:**
- `id` - Blog ID or slug

**Response:**
```json
{
  "success": true,
  "message": "Blog deleted successfully",
  "data": { ... deleted blog object ... }
}
```

**Status Codes:**
- `200` - Deleted successfully
- `404` - Blog not found
- `400` - Deletion error

---

### 6. Get Featured Blogs
**GET** `/api/blog/featured`

**Query Parameters:**
- `limit` (optional) - Number of blogs to return (default: 5)

**Response:**
```json
{
  "success": true,
  "data": [ ... array of featured blogs ... ]
}
```

---

### 7. Add Comment to Blog
**POST** `/api/blog/:id/comments`

**URL Parameters:**
- `id` - Blog ID or slug

**Request Body:**
```json
{
  "userId": "user-id",
  "userName": "John Doe",
  "text": "Great blog post!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Comment added successfully",
  "data": { ... updated blog object with new comment ... }
}
```

**Status Codes:**
- `201` - Comment added
- `400` - Validation error
- `404` - Blog or user not found

---

### 8. Delete Comment
**DELETE** `/api/blog/:id/comments`

**URL Parameters:**
- `id` - Blog ID or slug

**Request Body:**
```json
{
  "commentId": "comment-id"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Comment deleted successfully",
  "data": { ... updated blog object ... }
}
```

**Status Codes:**
- `200` - Comment deleted
- `400` - Deletion error
- `404` - Blog or comment not found

---

## Features

### Automatic Features
- **Slug Generation** - Automatically generated from title
- **Read Time Calculation** - Auto-calculated based on content (200 words/min)
- **View Tracking** - Views increment on each GET request
- **Timestamp Management** - Created and updated timestamps

### Blog Fields
- **Title** - Blog title (max 200 chars)
- **Slug** - URL-friendly identifier (auto-generated, unique)
- **Description** - Short description (max 500 chars)
- **Content** - Full blog content
- **Author** - Reference to User who created blog
- **Category** - Blog category (enum)
- **Image** - Featured image URL
- **Tags** - Array of tags for filtering
- **Published** - Published/Draft status
- **Featured** - Featured on homepage
- **Views** - View counter
- **Likes** - Like counter
- **Comments** - Array of user comments
- **Read Time** - Estimated read time in minutes

---

## Error Handling

### Common Error Responses

**Validation Error:**
```json
{
  "success": false,
  "message": "Title, description, and content are required"
}
```

**Not Found:**
```json
{
  "success": false,
  "message": "Blog not found"
}
```

**Server Error:**
```json
{
  "success": false,
  "message": "Failed to fetch blogs"
}
```

---

## Usage Examples

### Create Blog with cURL
```bash
curl -X POST http://localhost:3000/api/blog \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Blog Post",
    "description": "This is my first blog",
    "content": "Lorem ipsum dolor sit amet...",
    "category": "Travel Tips",
    "tags": ["travel", "tips"],
    "authorId": "user-id-here",
    "authorName": "John Doe",
    "published": true
  }'
```

### Get All Blogs with Filters
```bash
curl "http://localhost:3000/api/blog?page=1&limit=10&category=Car%20Hire&published=true"
```

### Get Single Blog
```bash
curl http://localhost:3000/api/blog/my-blog-slug
```

### Update Blog
```bash
curl -X PUT http://localhost:3000/api/blog/blog-id \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "published": true
  }'
```

### Add Comment
```bash
curl -X POST http://localhost:3000/api/blog/blog-id/comments \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user-id",
    "userName": "Jane Doe",
    "text": "Great article!"
  }'
```

---

## Security Considerations

1. **Author Verification** - Always verify author exists before creating blog
2. **Input Validation** - All inputs validated on server
3. **Comment Limits** - Max 500 characters per comment
4. **Access Control** - Implement role-based access (admins only for create/update/delete)
5. **Slug Uniqueness** - Automatic handling of duplicate slugs with timestamp suffix

---

## Performance Tips

1. **Pagination** - Use pagination for large blog lists
2. **Filtering** - Filter by category or featured status
3. **Indexing** - Slug field is unique indexed
4. **Populate** - Author details auto-populated
5. **View Tracking** - Views incremented efficiently

---

## Future Enhancements

- [ ] Advanced search with Elasticsearch
- [ ] Blog categories management
- [ ] Tags management
- [ ] Comment moderation
- [ ] Like functionality
- [ ] Share tracking
- [ ] SEO optimization
- [ ] Image upload handling
- [ ] Markdown support
- [ ] Draft auto-save
- [ ] Collaborative editing
- [ ] Analytics dashboard

---

## Setup Instructions

1. **Model already created:** `src/app/api/models/Blog.js`
2. **Routes ready:**
   - `src/app/api/blog/route.js` - GET all, POST create
   - `src/app/api/blog/[id]/route.js` - GET, PUT, DELETE single
   - `src/app/api/blog/featured/route.js` - GET featured
   - `src/app/api/blog/[id]/comments/route.js` - Comment management

3. **Start using:**
   ```bash
   npm run dev
   ```

All endpoints are ready to use!
