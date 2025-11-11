const express = require('express');
const router = express.Router();
const axios = require('axios');

// Fetch projects from GitHub API
router.get('/github', async (req, res) => {
  try {
    const username = 'Divahar2507';
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      params: {
        sort: 'updated',
        per_page: 6,
        type: 'all'
      }
    });

    const projects = response.data.map(repo => ({
      id: repo.id,
      title: repo.name.replace(/-/g, ' ').replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: repo.description || 'No description available',
      githubUrl: repo.html_url,
      liveUrl: repo.homepage,
      technologies: repo.topics || [],
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      updatedAt: repo.updated_at,
      image: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 1000000)}?w=800&h=600&fit=crop`
    }));

    res.json(projects);
  } catch (error) {
    console.error('GitHub API Error:', error.message);
    res.status(500).json({ 
      message: 'Failed to fetch GitHub projects',
      error: error.message 
    });
  }
});

module.exports = router;



