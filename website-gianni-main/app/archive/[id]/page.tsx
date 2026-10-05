import Header from '../../components/Header';
import ArchiveDetail from '../../components/ArchiveDetail';

export default async function ArchiveDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <Header />
      <ArchiveDetail id={id} />
    </>
  );
}
