import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Alert, } from 'react-native';

function Home ({navigation}) {

  const [cartItems, setCartItems] = useState([]);

  const products = [



    { id: '1', name: 'Burger do Futuro', price:45.00, image: require('../assets/veggi.jpg')},
    { id: '2', name: 'Chicken Burger', price:30.00, image: require('../assets/chicken.jpg')},
    { id: '3', name: 'Big Burger', price:35.00, image: require('../assets/beef.jpg')},
    { id: '4', name: 'XTUDÃO Burger', price:45.00, image: require('../assets/chicken.jpg') },
    { id: '5', name: 'Bacon Burger', price:37.00, image: require('../assets/pork.jpg')},
 



    
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    Alert.alert('Success', 'Produto adicionado ao carrinho');
  };

  

const removeFromCart = (product) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
  setCartItems(updatedCartItems);
  Alert.alert('Success', 'Produto removido do carrinho');
};




  const handlePayment = () => {
    if (cartItems.length > 0) {
      const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
      Alert.alert('Valor :- ', `Valor Total : Rs.${totalAmount}`);
      setCartItems([]);
      navigation.navigate("Order Customer Details");
      
    } else {
      Alert.alert('Error', 'O carrinho está vazio');
    }
  };


  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.itemtext}>{item.name}</Text>
      <Text style={styles.pricetext}>Valor: RS {item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Adicinar ao carrinho</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item)}>
      <Text style={styles.buttonText}>Remover</Text>
    </TouchableOpacity>

    </View>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={item.image} style={styles.cartItemImage} />
      <View style={styles.cartItemDetails}>

      
        <Text style={styles.itext} >{item.name}</Text>
        <Text style={styles.itext} >Valor: Rs {item.price}</Text>
      
      </View>
    </View>
  );

  return (
    
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>

      

      <Text style={styles.buttonText}>Fazer pedido</Text>

     </TouchableOpacity>
      <Image
        style= {styles.image1}
         source={require('../assets/cart.jpg') }>
      </Image>
      

      <Text style={styles.heading}>Lista: </Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#000',
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 20,
  },
  productItem: {
    marginBottom: 10,
    
  
    
    //alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
    flex:1,
    
    
  },
  addButton: {
    position:'absolute',
    backgroundColor: 'blue',
    paddingVertical:10,
    shadowColor:"red",
    borderRadius:30,
    width:99,
    left:118,
    bottom:15
    
  },
  paymentButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
    
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color:'#FFFFFF',
  },
  cartItem: {
    flexDirection: 'column',
    marginBottom: 40,
    
    
    
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
    color:'#FFFFFF',
  },

  pricetext:{
    fontSize:15,
    left:170,
    bottom:80,
    color:'#FFFFFF',
  },

  itemtext:{

    fontSize:15,
    fontWeight:'bold',
    left:165,
    bottom:90,
    color:'#FFFFFF',
  },

    itext:{
    color:'#FFFFFF',
  },

  removeButton:{

    position:'absolute',
    backgroundColor: 'gray',
    paddingVertical:10,
    shadowColor:"red",
    borderRadius:30,
    width:99,
    left:220,
    bottom:15
  },

  image1:{

    height:35,
    width:35,
    top:44,
    left:55
  }
};

export default Home;