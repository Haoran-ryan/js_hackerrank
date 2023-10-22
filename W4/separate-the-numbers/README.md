A numeric string `s` , is beautiful if it can be split into a sequence of two or more positive integers a[1], a[2], ..., a[n] satisfying the following conditions:

1. a[i] - a[i-1] = 1 for any 1 < i <= n (i.e., each element in the sequence is 1 more than the previous element).
2. No a[i] contains a leading zero. For example, we can split s = 10203 into the sequence {1, 02, 03}, but it is not beautiful because 02 and 03 have leading zeroes.
3. The contents of the sequence cannot be rearranged. For example, we can split s = 312 into the sequence {3, 1, 2}, but it is not beautiful because it breaks our first constraint (i.e., 1 - 3 != 1).

<img src='https://s3.amazonaws.com/hr-assets/0/1486398483-1b25a912c1-Separate.png'/><br/>
Perform q queries where each query consists of some string s. For each query, print whether or not the string is beautiful on a new line. If it's beautiful, print YES x, where x is the first number of the increasing sequence. If there are multiple such values of x, choose the smallest. Otherwise, print NO.

### Function Description
Complete the separateNumbers function in the editor below. It should print a string as described above.
separateNumbers has the following parameter:
  - s: an integer value represented as a string

### Prints
- string: Pring a string as described above. Return nothing.

### Input Format
The first line contains an integer `q`, the number of strings to evaluate.
Each of the next `q` lines contains an integer string `s` to query.

### Constraints
- 1 <= q <= 10
- 1 <= |s| <= 32
- s[i] belongs to [0-9]



## Reflection 

### 解决策略：

1. **确定问题的边界情况**：例如，在这道题中，如果`s`的长度为1，那么它不可能是一个美丽的数字串，因为我们需要至少两个数字来形成一个序列。

2. **确定可能的起始数字**：考虑到数字串的最长可能长度，确定可能的起始数字的最大长度。在这个问题中，我们分析了最长长度应该是`s`的一半。

3. **逐步尝试所有可能的起始数字**：从最小长度开始，尝试所有可能的起始数字。

4. **为每个可能的起始数字构建一个完整的数字串**：每次增加1，并将新数字附加到当前序列的末尾，直到构建的字符串与`s`长度一致。

5. **验证构建的数字串**：检查是否与原始`s`匹配。

6. **记录或输出答案**：如果匹配，则输出或记录结果；如果所有可能的起始数字都已尝试且没有匹配的，输出"NO"。

### 常见错误：

1. **未处理边界情况**：很容易遗漏一些边界情况，这可能导致不正确的输出。每次解决问题时，都应该考虑到各种可能的特殊情况。

2. **循环条件的问题**：如在您的原始代码中，`while`循环的条件可能不够严格，这可能导致构建的数字串不正确。确保循环的终止条件既简单又清晰。

3. **性能问题**：虽然在这个特定问题中，字符串的最大长度是32，但在其他场景中，可能需要考虑算法的效率。尝试优化代码，避免不必要的计算。

4. **使用了不适当的数据类型**：如在处理非常大的数字时，应该使用`BigInt`代替普通的数字类型。

5. **逻辑上的错误或遗漏**：有时，我们可能会遗漏一些逻辑步骤或误解题目要求，导致输出不正确。

### 建议：

1. **仔细阅读题目**：确保你完全理解了题目的要求。

2. **手写或绘制问题的例子**：这有助于你更好地理解问题，并找出可能的解决策略。

3. **编写清晰的代码**：尽量保持代码简洁明了，避免冗余。

4. **测试代码**：使用多个测试用例，特别是边界情况，确保代码的正确性。

5. **定期练习**：解决类似问题，反复练习，这有助于增强你的编码和问题解决能力。
