import {
  white,
  persianRed,
  charlestonGreen,
  registrationBlack,
  maximumBlue,
  blueSapphireDarker,
  blueSapphirelighter,
  black
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'

export default {
  spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: registrationBlack,
    primary2Color: blueSapphireDarker,
    primary3Color: blueSapphirelighter,
    accent1Color: persianRed,
    accent2Color: charlestonGreen,
    accent3Color: maximumBlue,
    textColor: registrationBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: charlestonGreen,
    disabledColor: fade(black, 0.3),
    pickerHeaderColor: persianRed
  }
}
