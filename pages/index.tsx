import Head from 'next/head'
import { loadRewards } from '../lib/load-rewards'
import { Reward } from '../components/Reward/Reward'

export async function getStaticProps() {
  const rewards = await loadRewards()

  return {
    props: { rewards }
  }
}

type RewardProps = {
  rewards: any,
  onClick: any,
}

function increaseEnergy(name:string) {
  console.log(name)
}

function Home({ rewards }: RewardProps) {
  return (
    <div>
      <Head>
        <title>Reward Chest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Reward Chest</h3>
        </div>
        <Reward
          records={rewards}
          increase={increaseEnergy}
        />
      </div>
      </main>

      <footer>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by UM2
        </a>
      </footer>
    </div>
  )
}

export default Home