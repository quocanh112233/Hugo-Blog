const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://favhffvfzojsmpkukhhu.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable__xdFHs1WmqLDDBSH3IO56A_yTtvod-E';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function generateHugoPosts() {
    console.log("Đang lấy bài viết");

    const { data: posts, error } = await supabase.from('posts').select('*');

    if (error) {
        console.error("Lỗi khi lấy dữ liệu:", error.message);
        return;
    }

    if (!posts || posts.length === 0) {
        console.log("Chưa có bài viết nào trong Database.");
        return;
    }

    const postsDir = path.join(__dirname, 'content', 'posts');
    if (!fs.existsSync(postsDir)) {
        fs.mkdirSync(postsDir, { recursive: true });
    }

    posts.forEach(post => {
        const safeTitle = post.title.replace(/"/g, '\\"');

        const markdownContent = `---
id: "${post.id}"
title: "${safeTitle}"
date: ${post.created_at}
author: "${post.author_name}"
avatar: "${post.author_avatar || ''}"
draft: false
---

${post.content}
`;

        const filePath = path.join(postsDir, `${post.id}.md`);

        fs.writeFileSync(filePath, markdownContent);
    });

    console.log(`Đã tạo thành công ${posts.length} file Markdown tĩnh cho Hugo!`);
}

generateHugoPosts();