import PageLayout from '../components/PageLayout'

function HomePage() {
  return (
    <PageLayout title="Home Page">
      <p>Example React Application for test run React</p>
      <p>
        This app use{' '}
        <a
          href="https://gorest.co.in/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 underline hover:no-underline"
        >
          https://gorest.co.in/
        </a>{' '}
        as public API to render content
      </p>
    </PageLayout>
  )
}

export default HomePage
