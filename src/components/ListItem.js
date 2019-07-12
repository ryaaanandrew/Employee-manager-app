import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
 
class ListItem extends Component {

    onRowPress = () => {
        Actions.employeeEdit({ employee: this.props.employee });
    };

    render() {
    const { name } = this.props.employee;
    return (
        <TouchableWithoutFeedback onPress={this.onRowPress}>
            <View>
                <CardSection>
                    <Text style={style.titleStyles}>
                        {name}
                    </Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    );
    }
}
 
const style = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15,
  }
}
 
export default ListItem;
