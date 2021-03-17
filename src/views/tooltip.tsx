import React from 'react';
import { Tooltip, Text, TooltipProps } from 'react-native-elements';
import { Header } from './header';
import { View, StyleSheet, Dimensions } from 'react-native';
import colors from '../config/colors';

const { height } = Dimensions.get('window');

type ToolTipComponentProps = {};

const TooltipComponent: React.FunctionComponent<ToolTipComponentProps> = () => {
  const toolProps = {};
  return (
    <>
      <Header title="Tooltip" />
      <View style={{ marginVertical: height / 8 }}>
        <View style={styles.view}>
          <Tooltip
            {...(toolProps as TooltipProps)}
            popover={<Text>Hey there!</Text>}
            withPointer={false}
          >
            <Text>Without caret</Text>
          </Tooltip>
          <Tooltip
            {...(toolProps as TooltipProps)}
            popover={<Text>Tooltip info goes here</Text>}
            backgroundColor={colors.primary}
          >
            <Text>Press me</Text>
          </Tooltip>
        </View>
        <View style={styles.view}>
          <Tooltip
            {...(toolProps as TooltipProps)}
            backgroundColor={colors.secondary}
            popover={
              <Text>Tooltip info goes here too. Find tooltip everywhere</Text>
            }
            containerStyle={{ width: 170, height: 60 }}
          >
            <Text>Press me</Text>
          </Tooltip>
          <Tooltip
            {...(toolProps as TooltipProps)}
            pointerColor={colors.primary}
            popover={<Text>Tooltip info goes here too.</Text>}
          >
            <Text>Huge</Text>
          </Tooltip>
        </View>
        <View style={styles.view}>
          <Tooltip
            {...(toolProps as TooltipProps)}
            width={150}
            popover={<Text>Tooltip info goes here</Text>}
          >
            <Text>More attention</Text>
          </Tooltip>
        </View>
        <View style={styles.view}>
          <Tooltip
            {...(toolProps as TooltipProps)}
            popover={<Text>Tooltip info goes here</Text>}
          >
            <Text>I'm Different</Text>
          </Tooltip>
          <Tooltip
            {...(toolProps as TooltipProps)}
            popover={<Text>Tooltip info goes here</Text>}
          >
            <Text>Press me</Text>
          </Tooltip>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 50,
  },
});

export default TooltipComponent;