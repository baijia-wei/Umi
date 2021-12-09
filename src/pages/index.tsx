import Login from './Login';
import './index.less';
export default function IndexPage() {
  // 给定一个只包括'(', ')','{', '}','[', ']'的字符串，判断字符串是否有效。
  // 有效字符串需满足:
  // 1.左括号必须用相同类型的右括号闭合。
  // 2.左括号必须以正确的顺序闭合。
  // 3.注意空字符串可被认为是有效字符串。

  // 事例1：
  // 输入：（）
  // 输出 true

  // 示例2:
  // 输入: "()[]{ }"
  // 输出: true
  // 示例3：
  // 输入：“()”
  // 输出: false

  // 示例4：
  // 输入: "(D]”
  // 输出: false

  // 示例5：
  // 输入："{[]}""
  // 输出: true

  const isValid = (s: string) => {
    console.log(s.length);
  };
  let a = '{[]}';
  console.log(isValid(a)); //true
  let b = '()[]{}';
  console.log(isValid(b)); //true
  let c = ' ([)]';
  console.log(isValid(c)); //flase

  return (
    <div>
      {/* 事例1：
    输入：（）
    输出 true

    示例2:
    输入: "()[]{ }"
    输出: true


    示例3：
    输入：“()”
    输出: false

    示例4：
    输入: "(D]”
    输出: false

    示例5：
    输入："{[]}""
    输出: true */}
    </div>
  );
}
