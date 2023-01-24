import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import CustomButton from "../../buttons/CustomButton";

export default function FeedbackModal({ item, showModal, setShowModal }) {
  const dispatch = useDispatch();

  function deleteFeedback() {
    dispatch({
      type: "DELETE_FEEDBACK",
      payload: {
        id: item.id,
        userId: item.user_id,
      },
    });
    setShowModal(!showModal);
  }

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.container}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Pressable style={styles.button} onPress={() => deleteFeedback()}>
                <Text style={{ color: "#FFF" }}>Delete</Text>
              </Pressable>
            </View>
            <View style={styles.scoreContainer}>
              <Text>
                Feeling: <Text style={styles.scoreText}>{item.feeling}</Text>
              </Text>
              <Text>
                Support: <Text style={styles.scoreText}>{item.support}</Text>
              </Text>
              <Text>
                Understanding:{" "}
                <Text style={styles.scoreText}>{item.understanding}</Text>
              </Text>
              <View style={styles.commentContainer}>
                <Text style={styles.commentText}>Comment:</Text>
                <Text style={styles.commentText}>
                  {item.comment ? item.comment : "None"}
                </Text>
              </View>
            </View>
            <View style={styles.btnContainer}>
              <CustomButton
                title="Close"
                onPress={() => setShowModal(!showModal)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "55%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  btnContainer: {
    marginTop: 20,
  },
  scoreContainer: {
    marginTop: 10,
  },
  scoreText: {
    fontWeight: "bold",
  },
  commentContainer: {
    marginTop: 10,
  },
  commentText: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#FF0000",
    padding: 4,
    borderRadius: 5,
  },
});
