import { atoms } from '@/src/css';
import { globalStyle, style } from '@vanilla-extract/css';

export const root = style({
  height: 'calc(100vh - 64px)',
  zIndex: '10',
});

export const markdownContainer = atoms({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '12',
  paddingX: { wide: '4', tablet: '19.5' },
  backgroundColor: 'backgroundElevatedPrimary',
  borderBottomWidth: 'px',
  borderColor: 'borderPrimary',
});

export const markdown = atoms({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'full',
});

export const iconBox = atoms({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: { wide: '8', tablet: '12' },
  height: '12',
  padding: { wide: '1.5', tablet: '3' },
  color: 'textPrimary',
  cursor: 'pointer',
});

globalStyle('body .w-md-editor-text-pre > code, body .w-md-editor-text-input', {
  fontSize: '18px !important',
  lineHeight: '24px !important',
});

globalStyle('body .w-md-editor-text', {
  paddingBottom: '48px',
});
