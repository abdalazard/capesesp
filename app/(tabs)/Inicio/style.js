// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  topView: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'black',
    color: 'white',
    width: '100%',
    padding: 30,
  },
  listView: {
    backgroundColor: 'white',
    flex: 1, 
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 70, 
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  scrollView: {
    flexGrow: 1,
  },
  listaDeObjetos: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  text: {
    fontSize: 16,
    color: 'black',
    flex: 1, 
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    padding: 5,
  },
  criacaoDeObjeto: {
    position: 'absolute', // Fixa no rodapé
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  addButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 8
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default styles;
