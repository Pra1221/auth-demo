const users = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        name: "System Administrator",
        role: "ADMIN",
        authorization: "Full Access",
        permissions: {
            dashboard: true,
            profile: true,
            updateProfile: true,
            createUser: true,
            deleteUser: true,
            manageUsers: true
        }
    },

    {
        id: 2,
        username: "user",
        password: "user123",
        name: "Standard User",
        role: "USER",
        authorization: "Limited Access",
        permissions: {
            dashboard: true,
            profile: true,
            updateProfile: true,
            createUser: false,
            deleteUser: false,
            manageUsers: false
        }
    }
];