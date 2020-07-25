import {
    StyleSheet,
    Dimensions,
} from 'react-native';
export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FFFFFF',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: '#FFFFFF',
    },
    sectionContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    addressText: {
        fontWeight: '200',
        color: '#DCDCDC',
        width: Math.round(Dimensions.get('window').width) - 100
    },
    pickUpText: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize: 16
    },
    radioIconOuterView: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioIconInnerView: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    },
    iconView: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    dropIconBorderColor: {
        borderColor: '#8A2BE2'
    },
    dropIconBackgroundColor: {
        backgroundColor: '#8A2BE2'
    },
    pickIconBorderColor: {
        borderColor: '#32CD32'
    },
    pickIconBackgroundColor: {
        backgroundColor: '#32CD32'
    },
    headerCardView: {
        display: "flex",
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    profileView: {
        paddingBottom: 10,
        paddingTop: 10,
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginLeft: 10,
        marginRight: 10,
        position: 'relative',
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    onWayText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10
    },
    packageId: {
        fontWeight: '200',
        fontSize: 16,
        marginRight: 10,
    },
    packageNumber: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 10
    },
    packageIdView: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    nameView: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        marginRight: 10,
        marginLeft: 10
    },
    name: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    iconBtn: {
        backgroundColor: 'transparent'
    },
    pickUpStatusContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    pickUpStatus: {
        fontSize: 14
    },
    pickUpTime: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    pickUpOTPContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    pickUpOTPText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
});