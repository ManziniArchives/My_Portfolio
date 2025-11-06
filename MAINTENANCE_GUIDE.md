# Portfolio Maintenance Guide

This guide will help you easily update and maintain your portfolio website.

## 📁 **Important Files to Update**

### 📄 **Data Files** (Most Common Updates)
These files contain all your portfolio content:

1. **`/src/data/personalInfo.ts`** - Your personal information and statistics
2. **`/src/data/certifications.ts`** - All your certifications
3. **`/src/data/projects.ts`** - Your GitHub projects
4. **`/src/data/skills.ts`** - Your technical skills

### 🎨 **Visual Elements**
- **`/src/components/Hero/Hero.tsx`** - Main landing section
- **`/src/components/Navigation/Navigation.tsx`** - Navigation menu
- **`/public/images/profile.jpg`** - Your profile picture

---

## 🚀 **Quick Update Instructions**

### ✅ **Adding a New Certification**
```typescript
// In /src/data/certifications.ts
{
  id: 'unique-id',           // lowercase, no spaces
  title: 'Your Certification Name',
  issuer: 'Organization Name',
  date: '2025',               // Current year
  verificationLink: 'https://link-to-certificate',
  category: 'security'       // security|development|data|cloud|database|business
}
```

### ✅ **Adding a New Project**
```typescript
// In /src/data/projects.ts
{
  id: 'project-id',                  // lowercase, no spaces
  name: 'Project Name',
  description: 'Brief project description',
  githubUrl: 'https://github.com/username/repo',
  technologies: ['React', 'Node.js'], // Max 5 technologies
  language: 'JavaScript',            // Primary language
  updatedAt: '2025-01-15',           // YYYY-MM-DD format
  featured: true                     // true for main projects, false for others
}
```

### ✅ **Adding a New Skill**
```typescript
// In /src/data/skills.ts
{
  name: 'New Skill',
  proficiency: 4,           // 1-5 scale (5 = expert)
  experience: '2+ years',   // Your experience level
  category: 'frontend'      // language|frontend|backend|database|tools
}
```

---

## 🔧 **Common Maintenance Tasks**

### 📊 **Updating Statistics**
In `/src/data/personalInfo.ts`, update the `stats` object:
```typescript
stats: {
  yearsOfExperience: '4+',    // Update as needed
  certifications: 31,          // Count all certifications in certifications.ts
  projects: 15,               // Count all projects in projects.ts
  technologies: 20            // Count all unique technologies
}
```

### 🎨 **Changing Colors**
- **Primary Colors**: Edit `/src/app/globals.css` and look for `--primary-600` variables
- **Text Colors**: Edit the `className` attributes in components

### 📱 **Adding Navigation Items**
In `/src/components/Navigation/Navigation.tsx`, update the `navItems` array:
```typescript
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'New Page', href: '/new-page' }, // Add this
  // ... other items
]
```

### 🖼️ **Updating Profile Picture**
1. Replace `/public/images/profile.jpg` with your new photo
2. Recommended size: 400x400 pixels
3. Use square format for best results

---

## 🏷️ **Category Reference**

### Certification Categories
- `security`: Cybersecurity, information security
- `development`: Programming, software engineering
- `data`: Data science, analytics, visualization
- `cloud`: AWS, Oracle Cloud, cloud platforms
- `database`: SQL, database management
- `business`: Business analysis, management

### Skill Categories
- `language`: Programming languages (Java, Python, JavaScript)
- `frontend`: Frontend technologies (React, HTML, CSS)
- `backend`: Backend frameworks (Node.js, Express.js)
- `database`: Database systems (MySQL, MongoDB)
- `tools`: Development tools (Git, Docker, AWS)

### Skill Proficiency Levels
- `1`: Basic familiarity
- `2`: Working knowledge
- `3`: Comfortable / Intermediate
- `4`: Proficient / Advanced
- `5`: Expert / Master level

---

## 🚨 **Important Notes**

1. **Always check dates**: When adding new items, use current year (2025)
2. **Update statistics**: After adding/removing items, update the count in `personalInfo.ts`
3. **Test changes**: Run `npm run dev` to preview changes
4. **Backup**: Before making major changes, backup your work
5. **Links**: Ensure all GitHub and verification links work correctly

---

## 🛠️ **Development Commands**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for errors
npm run lint

# Fix formatting
npm run format
```

---

## 📝 **Template for Quick Copy-Paste**

### Certification Template:
```typescript
{
  id: 'your-cert-id',
  title: 'Certification Name',
  issuer: 'Organization',
  date: '2025',
  verificationLink: 'https://verification-link',
  category: 'development'
},
```

### Project Template:
```typescript
{
  id: 'your-project-id',
  name: 'Project Name',
  description: 'What this project does',
  githubUrl: 'https://github.com/username/repo',
  technologies: ['React', 'Node.js', 'TypeScript'],
  language: 'TypeScript',
  updatedAt: '2025-01-15',
  featured: false
},
```

### Skill Template:
```typescript
{
  name: 'Your Skill',
  proficiency: 4,
  experience: '2+ years',
  category: 'frontend'
},
```

---

## 🆘 **Troubleshooting**

### **Changes not showing?**
- Stop the development server (Ctrl+C)
- Run `npm run dev` again
- Clear browser cache (Ctrl+F5)

### **Build errors?**
- Check for syntax errors in recently modified files
- Ensure all brackets and commas are properly placed
- Run `npm run lint` to identify issues

### **Images not loading?**
- Ensure image files are in `/public/images/`
- Check file names match exactly (case-sensitive)
- Verify file formats (use .jpg, .png, .webp)

---

*For any questions or issues, refer to the comments in each data file for specific guidance.*