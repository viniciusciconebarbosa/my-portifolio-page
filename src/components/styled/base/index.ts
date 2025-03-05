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
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.space[8]};
  }
`

export const Section = styled.section<{ $muted?: boolean }>`
  padding: ${({ theme }) => theme.space[12]} 0;
  background-color: ${({ $muted, theme }) => 
    $muted ? `${theme.colors.muted}80` : 'transparent'};
`

export const Text = styled.p<{ $size?: keyof DefaultTheme['fontSizes']; $muted?: boolean }>`
  font-size: ${({ theme, $size = 'base' }) => theme.fontSizes[$size]};
  color: ${({ theme, $muted }) => 
    $muted ? theme.colors.mutedForeground : theme.colors.foreground};
  line-height: 1.6;
`

export const Heading = styled.h2<{ $size?: keyof DefaultTheme['fontSizes'] }>`
  font-size: ${({ theme, $size = '3xl' }) => theme.fontSizes[$size]};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: ${({ theme }) => theme.space[16]};
` 