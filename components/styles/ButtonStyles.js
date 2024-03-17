import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: '#3498db',
    color: '#fff',
    border: '2px solid #03498db',
    borderRadius: '12px',
    transitionDuration: '0.4s',
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#3498db',
    borderWidth: 2,
    borderColor: "blue",
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonBox: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 230,
    height: 50,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  buttonProduct: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  hover: {
    color: 'green',
    backgroundColor: 'green',
    transition: "all 100ms ease",
    transform: "scale(1.05)",
    boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)"
  },
});

export default buttonStyles;
