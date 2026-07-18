export function interaction({ customID, authorOnly = false, run }) {
  return { customID, authorOnly, run };
}
