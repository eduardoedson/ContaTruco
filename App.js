import React, { useState } from 'react';
import { StatusBar, TextInput, ScrollView, View, Text, TouchableOpacity, Dimensions, ImageBackground, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

const App = () => {
	const [nomeTimeA, setNomeTimeA] = useState('Time A')
	const [nomeTimeB, setNomeTimeB] = useState('Time B')
	const [pontosTimeA, setPontosTimeA] = useState(0)
	const [pontosTimeB, setPontosTimeB] = useState(0)
	const [vitoriasTimeA, setVitoriasTimeA] = useState(0)
	const [vitoriasTimeB, setVitoriasTimeB] = useState(0)
	const [isModalVisibleTimeA, setModalVisibleTimeA] = useState(false)
	const [isModalVisibleTimeB, setModalVisibleTimeB] = useState(false)
	const [tempNomeA, setTempNomeA] = useState(nomeTimeA)
	const [tempNomeB, setTempNomeB] = useState(nomeTimeB)

	const toggleModalTimeA = () => {
		setModalVisibleTimeA(!isModalVisibleTimeA);
	}

	const toggleModalTimeB = () => {
		setModalVisibleTimeB(!isModalVisibleTimeB);
	}

  	return (
		<ScrollView>
			<StatusBar barStyle="light-content" backgroundColor="#006C4E" />
			<Modal isVisible={isModalVisibleTimeA}>
				<View style={{ backgroundColor: 'white', height: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: '90%', margin: 25}}
						onChangeText={text => setTempNomeA(text)}
						value={tempNomeA}
					/>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%', margin: 10 }}>
						<TouchableOpacity style={{ backgroundColor: '#006c4e', padding: 8, borderRadius: 5 }} onPress={toggleModalTimeA}>
							<Text style={{ fontSize: 20, color: 'white' }}>Cancelar</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ backgroundColor: '#006c4e', padding: 8, borderRadius: 5 }} onPress={ () => { setNomeTimeA(tempNomeA); toggleModalTimeA() }}>
							<Text style={{ fontSize: 20, color: 'white' }}>Salvar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<Modal isVisible={isModalVisibleTimeB}>
				<View style={{ backgroundColor: 'white', height: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
					<TextInput
						style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, width: '90%', margin: 25}}
						onChangeText={text => setTempNomeB(text)}
						value={tempNomeB}
					/>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '60%', margin: 10 }}>
						<TouchableOpacity style={{ backgroundColor: '#006c4e', padding: 8, borderRadius: 5 }} onPress={toggleModalTimeB}>
							<Text style={{ fontSize: 20, color: 'white' }}>Cancelar</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ backgroundColor: '#006c4e', padding: 8, borderRadius: 5 }} onPress={ () => { setNomeTimeB(tempNomeB); toggleModalTimeB() }}>
							<Text style={{ fontSize: 20, color: 'white' }}>Salvar</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>

			<View style={{ flex: 1, flexDirection: 'column' }}>
				<ImageBackground source={require('./assets/bg.png')} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'flex-start', alignItems: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').height  }}>

					<View style={{ flex: 1, flexDirection: 'row' }}>
						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2, marginTop: 10 }} onPress={toggleModalTimeA}>
							<Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>{nomeTimeA}</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2, marginTop: 10 }} onPress={toggleModalTimeB}>
							<Text style={{ fontSize: 35, color: 'white', fontWeight: 'bold' }}>{nomeTimeB}</Text>
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View style={{ alignItems: 'center', width: Dimensions.get('window').width / 2, marginTop: 10 }}>
							<Text style={{ fontSize: 55, color: 'white', fontWeight: 'bold' }}>{pontosTimeA}</Text>
						</View>

						<View style={{ alignItems: 'center', width: Dimensions.get('window').width / 2, marginTop: 10 }}>
							<Text style={{ fontSize: 55, color: 'white', fontWeight: 'bold' }}>{pontosTimeB}</Text>
						</View>
					</View>

					<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width, paddingLeft: 25, paddingRight: 25 }}>
						<MaterialCommunityIcons name='minus' color={'white'} size={55} onPress={ () => pontosTimeA > 0 ? setPontosTimeA(pontosTimeA - 1) : null } />
						<MaterialCommunityIcons name='restart' color={'white'} size={55} onPress={ () => { setPontosTimeA(0); setPontosTimeB(0) }} />
						<MaterialCommunityIcons name='minus' color={'white'} size={55} onPress={ () => pontosTimeB > 0 ? setPontosTimeB(pontosTimeB - 1) : null } />
					</View>
					
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2 }} onPress={ () => setPontosTimeA(pontosTimeA + 1) }>
							<Image source={require('./assets/cartas/1.png')} style={{ width: 150, height: 65, resizeMode: 'center', borderRadius: 10 }} />
						</TouchableOpacity>

						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2 }} onPress={ () => setPontosTimeB(pontosTimeB + 1) }>
							<Image source={require('./assets/cartas/1.png')} style={{ width: 150, height: 65, resizeMode: 'center', borderRadius: 10 }} />
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1, flexDirection: 'row' }}>
						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2 }} onPress={ () => setPontosTimeA(pontosTimeA + 3) }>
							<Image source={require('./assets/cartas/3.png')} style={{ width: 150, height: 65, resizeMode: 'center', borderRadius: 10 }} />
						</TouchableOpacity>

						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2 }} onPress={ () => setPontosTimeB(pontosTimeB + 3) }>
							<Image source={require('./assets/cartas/3.png')} style={{ width: 150, height: 65, resizeMode: 'center', borderRadius: 10 }} />
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1, flexDirection: 'row' }}>
						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2 }} onPress={ () => setPontosTimeA(pontosTimeA + 6) }>
							<Image source={require('./assets/cartas/6.png')} style={{ width: 150, height: 65, resizeMode: 'center', borderRadius: 10 }} />
						</TouchableOpacity>

						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2 }} onPress={ () => setPontosTimeB(pontosTimeB + 6) }>
							<Image source={require('./assets/cartas/6.png')} style={{ width: 150, height: 65, resizeMode: 'center', borderRadius: 10 }} />
						</TouchableOpacity>
					</View>

					<View style={{ flex: 1, flexDirection: 'row' }}>
						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2 }} onPress={ () => setPontosTimeA(pontosTimeA + 9) }>
							<Image source={require('./assets/cartas/9.png')} style={{ width: 150, height: 65, resizeMode: 'center', borderRadius: 10 }} />
						</TouchableOpacity>

						<TouchableOpacity style={{ alignItems: 'center', width: Dimensions.get('window').width / 2 }} onPress={ () => setPontosTimeB(pontosTimeB + 9) }>
							<Image source={require('./assets/cartas/9.png')} style={{ width: 150, height: 65, resizeMode: 'center', borderRadius: 10 }} />
						</TouchableOpacity>
					</View>

					<View style={{ borderBottomWidth: 1, borderBottomColor: 'white', width: Dimensions.get('window').width - 50, margin: 5 }} />

					<View style={{ flex: 1, flexDirection: 'column', width: Dimensions.get('window').width - 80 }}>
						<View style={{ alignSelf: 'center' }}>
							<Text style={{ fontSize: 25, color: 'white' }}>Vitórias</Text>
						</View>
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<MaterialCommunityIcons name='minus' color={'white'} size={30} onPress={ () => vitoriasTimeA > 0 ? setVitoriasTimeA(vitoriasTimeA - 1) : null } />
								<Text style={{ fontSize: 25, color: 'white' }}> {vitoriasTimeA} </Text>
								<MaterialCommunityIcons name='plus' color={'white'} size={30} onPress={ () => setVitoriasTimeA(vitoriasTimeA + 1)  } />
							</View>


							<MaterialCommunityIcons name='restart' color={'white'} size={35} onPress={ () => { setVitoriasTimeA(0); setVitoriasTimeB(0) }} />

							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<MaterialCommunityIcons name='minus' color={'white'} size={30} onPress={ () => vitoriasTimeB > 0 ? setVitoriasTimeB(vitoriasTimeB - 1) : null } />
								<Text style={{ fontSize: 25, color: 'white' }}> {vitoriasTimeB} </Text>
								<MaterialCommunityIcons name='plus' color={'white'} size={30} onPress={ () => setVitoriasTimeB(vitoriasTimeB + 1) } />
							</View>
						</View>
					</View>


				</ImageBackground>
			</View>
		</ScrollView>
  	);
};


export default App;
