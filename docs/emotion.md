## emotion

<code src='../components/emotion_css1.tsx'>emotion-css: 前缀默认 css</code>

<code src='../components/emotion_styled1.tsx'>emotion-styled：前缀默认 css</code>

组件样式的修改，如 Card 是 antd 的组件，修改它的样式

```ts
const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0,0,0,0.1) 0 0 10px;
  text-align: center;
`

<ShadowCard>
    <button>切换到{isRegister ? '登录' : '注册'}</button>
</ShadowCard>

```
