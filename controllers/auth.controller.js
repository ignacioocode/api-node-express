export const register = (req, res) => {
    const user = req.body
    console.log(user)
    res.json({ ok: true })
}

export const login = (req, res) => {
    res.json({ ok: 'login' })
}
