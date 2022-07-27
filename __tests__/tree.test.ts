import { TrieTree } from '../src/libs/tree';

describe('test TrieTree', () => {
  test('should get true when search prefix word', () => {
    const trie = new TrieTree(['cat', 'bat', 'rat', 'cabt']);

    expect(trie.search('cat')).toBeTruthy();
    expect(trie.search('batat')).toBeFalsy();
  });
  test('should get true when search full word', () => {
    const trie = new TrieTree(['cat', 'bat', 'rat', 'cabt']);

    expect(trie.search('cat', true)).toBeTruthy();
    expect(trie.search('ba', true)).toBeFalsy();
  });
  test('should can insert word', () => {
    const trie = new TrieTree();

    expect(trie.search('cat')).toBeFalsy();
    trie.insert('cat');
    expect(trie.search('cat')).toBeTruthy();
  });
});
