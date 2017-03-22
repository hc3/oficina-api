export default {
  database: 'oficinaDB',
  username: 'root',
  password: 'root',
    params: {
      dialect: 'mariadb',
    define: {
      underscored: true
    },
  },
  jwtSecret: 'Secr3t',
  jwtSession: { session: false },
}