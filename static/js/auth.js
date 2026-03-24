document.addEventListener('DOMContentLoaded', async () => {
    // kiểm tra xem biến 
    if (typeof supabaseClient === 'undefined') {
        console.error("Lỗi: supabaseClient chưa được khởi tạo!");
        return;
    }

    const authBtn = document.querySelector('a[href*="dang-nhap"]');
    const createPostBtn = document.querySelector('a[href*="tao-bai-viet"]');

    if (!authBtn) return;

    const { data: { session } } = await window.supabaseClient.auth.getSession();

    if (session) {
        authBtn.innerHTML = `<span>Đăng xuất</span>`;
        if (createPostBtn) createPostBtn.style.display = 'inline-block';

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