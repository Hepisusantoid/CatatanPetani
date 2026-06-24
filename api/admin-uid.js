// Tambahkan variabel ini di Vercel:
// Project Settings → Environment Variables → Add:
//   Key   : ADMIN_UID
//   Value : UID Firebase kamu (dari Firebase Console → Authentication → Users)
//
// Jangan hardcode UID langsung di sini atau di admin.html.

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  const uid = process.env.ADMIN_UID;

  if (!uid) {
    return res.status(500).json({
      error: 'ADMIN_UID belum diatur di Environment Variables Vercel.'
    });
  }

  res.status(200).json({ adminUid: uid });
}
