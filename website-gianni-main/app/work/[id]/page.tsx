import Header from '../../components/Header';
import WorkDetail from '../../components/WorkDetail';

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <Header />
      <WorkDetail id={id} />
    </>
  );
}
