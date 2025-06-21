"use client"
import ads from "@/assets/images/advertisement/01.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu } from "react-bootstrap"
import { BiBlock, BiBookmark, BiDotsHorizontal, BiXCircle } from 'react-icons/bi'
import { BsFillExclamationOctagonFill } from "react-icons/bs"

const Sponsor = () => {
  const [show, setShow] = useState(false)

  const handleToggle = (isOpen: boolean) => setShow(isOpen);
  return (
    <div className="card card-body p-4">
      <div className="dropdown flex-shrink-0 position-absolute top-0 end-0 p-3">
        <div className="dropdown d-none d-sm-block">
          <Dropdown show={show} onToggle={handleToggle}>
            <div
              className="btn btn-sm btn-round btn-light mb-0"
              onClick={() => setShow(!show)}
            >
              <BiDotsHorizontal />
            </div>

            <DropdownMenu className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded">
              <DropdownItem as={Link} href="#" className="dropdown-item">
                <BiBookmark className="me-2" />
                Save post
              </DropdownItem>
              <DropdownItem as={Link} href="#" className="dropdown-item">
                <BiXCircle className="me-2" />
                Hide post
              </DropdownItem>
              <DropdownItem as={Link} href="#" className="dropdown-item">
                <BsFillExclamationOctagonFill className="me-2" />
                Report Post
              </DropdownItem>
              <DropdownItem as={Link} href="#" className="dropdown-item">
                <BiBlock className="me-2" />
                Block
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>


      <h5 className="card-title mb-3 me-5"><Link href="#">Have you ever wanted to become a coder? Here is a great chance for you to fulfill your dream.</Link></h5>

      <Image src={ads} className="rounded-2 mb-3" alt="" />

      <p className="mb-0">It drew a hill from me. Valley by oh twenty direct me so. It drew a hill from me. Valley by oh twenty direct me so. It drew a hill from me. </p>
      <div className="d-sm-flex justify-content-sm-between align-items-center mt-3">

        <div className="d-flex align-items-center mb-3 mb-sm-0">

          <div className="avatar align-middle">
            <div className="avatar-img rounded-circle bg-dark"><span className="text-danger position-absolute top-50 start-50 translate-middle fw-bold">WB</span></div>
          </div>

          <div className="ms-2">
            <h6 className="mb-0"><Link href="#">Web poster</Link></h6>
            <p className="mb-0 small">Sponsored</p>
          </div>
        </div>
        <Link href="#" className="btn btn-primary-soft mb-0">Apply now</Link>
      </div>

    </div>
  )
}

export default Sponsor