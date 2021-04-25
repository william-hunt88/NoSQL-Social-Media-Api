const router = require("express").Router();
const {
    getAllUsers,
    createUser,
    getUserById,
    addFriend,
    updateUser,
    removeUser,
    removeFriend
} = require("../user-controllers");


router.route("/").get(getAllUsers).post(createUser);
router.route("/:userId").get(getUserById).put(updateUser).delete(removeUser)
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend)




module.exports = router;