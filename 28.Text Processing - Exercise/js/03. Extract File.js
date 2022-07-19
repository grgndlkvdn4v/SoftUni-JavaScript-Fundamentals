function extractFile(input) {
  let directoryArr = input.split("\\");
  let fileArr = directoryArr.pop().split(".");

  let extension = fileArr.pop();
  let fileName = fileArr.join(".");

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");