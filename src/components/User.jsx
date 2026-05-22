const AVATAR_VARIANTS = [
  'admin-initials--primary',
  'admin-initials--tertiary',
  'admin-initials--secondary',
  'admin-initials--primary-dim',
]

function getInitials(name) {
  if (!name?.trim()) return '?'
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

const User = ({ user, delUser, index = 0 }) => {
  const initials = getInitials(user.name)
  const avatarClass = AVATAR_VARIANTS[index % AVATAR_VARIANTS.length]

  return (
    <tr className="admin-table-row">
      <td className="admin-table-id">{user._id}</td>
      <td>
        <div className="admin-user-cell">
          <div className={`admin-initials ${avatarClass}`}>{initials}</div>
          <span className="admin-user-name">{user.name}</span>
        </div>
      </td>
      <td className="admin-table-username">{user.username ?? '—'}</td>
      <td className="admin-table-actions">
        <button
          type="button"
          className="admin-delete-btn"
          onClick={() => delUser(user._id)}
        >
          <span className="material-symbols-outlined admin-delete-icon">delete</span>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default User
