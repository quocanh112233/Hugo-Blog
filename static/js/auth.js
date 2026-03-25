document.addEventListener('DOMContentLoaded', async () => {
    if (typeof window.supabaseClient === 'undefined') {
        console.error("Lỗi: supabaseClient chưa được khởi tạo!");
        return;
    }

    const authBtn = document.querySelector('a[href*="dang-nhap"]');
    const createPostBtn = document.querySelector('a[href*="tao-bai-viet"]');

    if (!authBtn) return;

    const { data: { session } } = await window.supabaseClient.auth.getSession();

    if (session) {
        const user = session.user;
        const userName = user.user_metadata.full_name || user.email;

        authBtn.innerHTML = `<span>Đăng xuất (${userName})</span>`;

        authBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await window.supabaseClient.auth.signOut();
            window.location.reload();
        });

    } else {

        authBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const { error } = await window.supabaseClient.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) console.error("Lỗi đăng nhập:", error.message);
        });

        if (createPostBtn) {
            createPostBtn.addEventListener('click', (e) => {
                e.preventDefault();
                alert("Bạn cần đăng nhập để thực hiện viết bài.");
            });
        }
    }
});