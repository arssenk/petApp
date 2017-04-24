import React, {Component} from 'react';
import {Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { register_date } = this.props.pet;
        return(
            <CardSection>
                <Text>
                    {register_date}
                </Text>
            </CardSection>
        );
    }
}
const styles = {
    titleStyle: {
        fontSize:18,
        paddingLeft: 15
    }
};
export default ListItem;