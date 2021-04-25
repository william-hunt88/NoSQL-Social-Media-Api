const router = require("express").Router();
const {
  addThought,
  getAllThoughts,
  getSingleThought,
  addReaction,
  removeReaction,
  updateThought,
  removeThought,
} = require("../thought-controllers");

router.route("/:userId").post(addThought);
router.route("/").get(getAllThoughts);
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);
router.route("/:thoughtId/reactions").put(addReaction);
router.route("/:thoughtId/reactions/:reactionId").put(removeReaction);

module.exports = router;
