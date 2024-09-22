import { Link } from "expo-router";
import {Text, View } from "react-native"

const Index=()=>{
  return(<View style={{backgroundColor:"orange",
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    
    
  }}>
    <Text style={{color:"white",fontSize:24,fontWeight:"700",alignItems:"center"}}>Welcome to React Native. </Text>
  <Link href={"/about"} style={{alignItems:"center",fontSize:20,color:"green",borderBottomWidth:1}}> go to about </Link>
  <Link href={"./service"} style={{alignItems:"center",fontSize:20,color:"green",borderBottomWidth:1}}> go to bottom tabs </Link>
  </View>
);

}

export default Index;