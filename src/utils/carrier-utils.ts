export const sortedData = <T extends { createdAt?: string }>(filteredData: T[]): T[] => {
  const data = [...filteredData].sort((a, b) => {

    if (a.createdAt && b.createdAt) {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);

      return dateB.getTime() - dateA.getTime();
    } else {

      if (!a.createdAt && !b.createdAt) return 0;
      if (!a.createdAt) return 1;
      if (!b.createdAt) return -1;

      return 0;
    }
  });

  return data;
}
