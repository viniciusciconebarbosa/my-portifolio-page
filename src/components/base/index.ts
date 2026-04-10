import styled, { css, DefaultTheme } from 'styled-components'

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.div`
  width: min(100% - 2rem, 75rem);
  margin-inline: auto;
  padding-inline: clamp(1rem, 5vw, 2.5rem);
`

export const Section = styled.section<{ $muted?: boolean }>`
  padding: clamp(3rem, 8vw, 5rem) 0;
  margin-bottom: 10rem;
  background-color: ${({ $muted, theme }) => 
    $muted ? `${theme.colors.muted}80` : 'transparent'};
  transition: ${({ theme }) => theme.transitions.theme};
`

export const Text = styled.p<{ $size?: keyof DefaultTheme['fontSizes']; $muted?: boolean }>`
  font-size: ${({ theme, $size = 'base' }) => theme.fontSizes[$size]};
  color: ${({ theme, $muted }) => 
    $muted ? theme.colors.mutedForeground : theme.colors.foreground};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
`

export const Heading = styled.h2<{ $size?: keyof DefaultTheme['fontSizes'] }>`
  font-size: ${({ theme, $size = '3xl' }) => theme.fontSizes[$size]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[8]};
`