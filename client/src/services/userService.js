export async function login(user) {
    // POST
    const res = await fetch(`${API_URL}/login`)
    return res.json();
}