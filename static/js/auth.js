document.addEventListener('DOMContentLoaded', async () => {
    const authBtn = document.querySelector('a[href*="dang-nhap"]');
    const createPostBtn = document.querySelector('a[href*="tao-bai-viet"]');

    if (!authBtn) {
        console.log("Không tìm thấy nút đăng nhập!");
        return;
    }

    // lấy thông tin phiên đăng nhập
    const { data: { session } } = await window.supabaseClient.auth.getSession();

    if (session) {
        const user = session.user;
        const userName = user.user_metadata.full_name || user.email;

        authBtn.style.whiteSpace = "nowrap";
        authBtn.innerHTML = `<span>Đăng xuất</span>`;

        if (createPostBtn) createPostBtn.style.display = '';

        authBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await window.supabaseClient.auth.signOut();
            window.location.reload();
        });
    } else {
        if (createPostBtn) createPostBtn.style.display = 'none';

        authBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const { data, error } = await window.supabaseClient.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) console.error("Lỗi đăng nhập:", error.message);
        });
    }
});