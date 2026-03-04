import React from 'react';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Footer = () => {
    return (
        <div>
            <footer class=" bg-[#1E2939] text-gray-400 py-10 space-y-6 ">
        <div
            class="w-11/12 md:w-10/12 mx-auto footer justify-between grid md:grid-cols-2 lg:grid-cols-5">
            <nav>
                <a class="text-2xl font-bold text-white cursor-pointer logo">TickeTin</a>
                <p>Customer Tickets Dashboard provides a clear and organized overview of all support requests, including issue details, priority levels, assigned agents, and current status. It helps support teams track, manage, and resolve customer problems efficiently in one centralized system.</p>
            </nav>
            <nav>
                <h6 class="footer-title">Company</h6>
                <a class="link link-hover">About Us</a>
                <a class="link link-hover">Our Mission</a>
                <a class="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 class="footer-title">Services</h6>
                <a class="link link-hover">Products & Services</a>
                <a class="link link-hover">Customer Stories</a>
                <a class="link link-hover">Download Apps</a>
            </nav>
            <nav>
                <h6 class="footer-title">Information</h6>
                <a class="link link-hover">Privacy Policy</a>
                <a class="link link-hover">Terms & Conditions</a>
                <a class="link link-hover">Join Us</a>
            </nav>
            <nav>
                <a class="cursor-pointer">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook
                </a>
                <a class="cursor-pointer">
                    <FontAwesomeIcon icon="fa-brands fa-twitter"/> Twitter
                </a>
                <a class="cursor-pointer">
                    <FontAwesomeIcon icon="fa-brands fa-instagram"/> Instagram
                </a>
                <a class="cursor-pointer">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin"/> LinkedIn
                </a>
                <a class="cursor-pointer">
                    <FontAwesomeIcon icon="fa-solid fa-envelope"/> Email
                </a>
            </nav>
            
        </div>
        <hr class="w-11/12 md:w-10/12 mx-auto"></hr>
        <div class="text-center">
                <p>© 2026 TickeTin, Inc. All rights reserved.</p>
            
        </div>
    </footer>
        </div>
    );
};

export default Footer;