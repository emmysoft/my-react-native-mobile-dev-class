import { Alert, Button, Image, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState("");
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const handleVerifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You have to grant camera permission to use this app"
      );

      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await handleVerifyPermissions();

    if (!hasPermission) {
      return; //if permission exists then just return
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    // console.log(image);
    setPickedImage(image.uri);
  };

  let imagePreview = <Text>No image Taken yet</Text>;

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} />;
  }
  return (
    <View>
      <View>{imagePreview}</View>
      <Button title="Take picture" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;
